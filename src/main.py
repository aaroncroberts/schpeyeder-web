import os
import urllib

from google.appengine.api import users
from google.appengine.ext import ndb

import jinja2
import webapp2

## Change Jinja Template engine to use (( )) instead of {{ }}
JINJA_ENVIRONMENT=jinja2.Environment( 
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)), 
    extensions=['jinja2.ext.autoescape'], 
    variable_start_string='((', 
    variable_end_string='))', 
    autoescape=True)

# Handler for Main Page
class MainPageHandler(webapp2.RequestHandler):

    def get(self):

         template = JINJA_ENVIRONMENT.get_template('templates/index.html')
         self.response.write(template.render())

application = webapp2.WSGIApplication([
    ('/', MainPageHandler),
], debug=True)
