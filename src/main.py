import os
import urllib

from google.appengine.api import users
from google.appengine.ext import ndb

import jinja2
import webapp2

JINJA_ENVIRONMENT=jinja2.Environment( 
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)), 
    extensions=['jinja2.ext.autoescape'], 
    variable_start_string='((', variable_end_string='))', 
    autoescape=True)

class MainPageHandler(webapp2.RequestHandler):

    def get(self):

        template = JINJA_ENVIRONMENT.get_template('templates/drivers/index.html')
        self.response.write(template.render())

application = webapp2.WSGIApplication([
    ('/', MainPageHandler),
], debug=True)
