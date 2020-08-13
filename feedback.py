import base64
from email.mime.text import MIMEText

from apiclient import discovery
import oauth2client
from oauth2client import client
from oauth2client import tools
from oauth2client import file
import os
from httplib2 import Http

from apiclient import errors

from apiclient.discovery import build


from flask import Flask
app=Flask(__name__)

try:
    import argparse
    flags = argparse.ArgumentParser(parents=[tools.argparser]).parse_args()
except ImportError:
    flags = None

SCOPES = 'https://www.googleapis.com/auth/gmail.send'
CLIENT_SECRET_FILE = 'credentials.json'
APPLICATION_NAME = 'Gmail API Quickstart'

def get_credentials():
    """Gets valid user credentials from storage.

    If nothing has been stored, or if the stored credentials are invalid,
    the OAuth2 flow is completed to obtain the new credentials.

    Returns:
        Credentials, the obtained credential.
    """
    # Not for app-------------------
    # home_dir = os.path.expanduser('~')
    # credential_dir = os.path.join(home_dir, '.credentials')
    # if not os.path.exists(credential_dir):
    #     os.makedirs(credential_dir)
    # credential_path = os.path.join(credential_dir,
    #                                'credentials.json')
    # print(credential_path)
    # -----------------------------------

    # For web app
    credential_path = 'credentials.json'

    store = file.Storage(credential_path)
    credentials = store.get()
    if not credentials or credentials.invalid:
        flow = client.flow_from_clientsecrets(CLIENT_SECRET_FILE, SCOPES)
        flow.user_agent = APPLICATION_NAME
        if flags:
            credentials = tools.run_flow(flow, store, flags)
        else: # Needed only for compatability with Python 2.6
            credentials = tools.run(flow, store)
        print('Storing credentials to ' + credential_path)
    return credentials


credentials = get_credentials()
service = build('gmail', 'v1', http=credentials.authorize(Http()))

def sendFeedback(mes):
    print("getting here")
    message = mes
    sub = "How to improve"
    send = "functionalcardiacfeedback@gmail.com"
    to = "functionalcardiacfeedback@gmail.com"
    mes = create_message(send, to, sub, message)

    send_message(service, 'me', mes)

def create_message(sender, to, subject, message_text):
    message = MIMEText(message_text)
    message['to'] = to
    message['from'] = sender
    message['subject'] = subject
    return {'raw': base64.urlsafe_b64encode(message.as_string().encode()).decode()}


def send_message(service, user_id, message):
    try:
        message = (service.users().messages().send(userId=user_id, body=message)
                   .execute())
        print('Message Id: %s' % message['id'])
        return message
    except errors.HttpError as error:
        print ('An error occurred: %s' % error)


@app.route('/_carryOut/<jsdata>', methods=['POST', 'GET'])
def carryOut(jsdata):
    sendFeedback(jsdata)
    return 'success'

if __name__ =='__main__':
    port = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=port, debug=True)
