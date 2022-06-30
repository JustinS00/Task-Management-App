# README

# CVWO Assignment Task Management Application

### Visit [Heroku] (https://my-simple-task-management-app.herokuapp.com) for a deployed version of the application 





This application is made using Ruby 3.0.3p157, Rails 7.0.0 and Puma version: 5.5.2.

### To get started 
1. Clone this repo by running $git clone https://github.com/JustinS00/Task-Management-App on your terminal.
2. Navigate into the project directory $cd Task-Management-App and install the dependencies for the project by runinng $npm install
3. Run $rails db:migrate 
4. Run $rails s
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Additional Notes
You may encounter some problems when running the application.

1. Webpacker have to be recompile. 
Run $rails webpacker:install
Refer to this [link](https://stackoverflow.com/questions/54113179/rails-webpackermanifestmissingentryerror-in-homeindex) for more help.

2. You may face RunTimeError (ExecJS::RuntimeError in Homepage#index). Refresh the page a couple of times and the issue will be fixed.

