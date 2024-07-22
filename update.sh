# update database
php artisan migrate --force
# refresh php class files
composer dumpautoload
# optimize laravel classes, routes, controllers e etc.
php artisan optimize
