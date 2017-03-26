# simple python module
# 
# test with this json document input:
# {
#   "first_name": "Paco",
#   "last_name": "Gonzalez-Martinez!!!"
# }
#
def my_handler(event, context):
    message = 'Hello {} {}!'.format(event['first_name'], 
                                    event['last_name'])  
    return { 
        'message' : message
    }  