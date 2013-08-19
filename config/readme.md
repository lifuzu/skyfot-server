1. new nginx config file for skyfot.com;
2. create lnk under /etc/nginx/sites-enable/skyfot;
3. export several global variables:
'''
export NODE_ENV=production
export MANDRILL_USERNAME=''
export MANDRILL_API_KEY=''
'''
4. run command to let nginx reload config:
'''
sudo nginx -s reload
'''
5. install mongodb;
6. install forever;
7. install git;
8. install nginx;
9. install nodejs/npm;
