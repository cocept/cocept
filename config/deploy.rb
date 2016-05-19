# config valid only for current version of Capistrano
lock '3.5.0'

set :application, 'Cocept'
set :repo_url, 'git@github.com:cocept/cocept.git'
set :deploy_to, '/home/max/www/cocept'
set :keep_releases, 3

namespace :deploy do

  task :update_jekyll do
    on roles(:web) do
      within release_path do
        execute :bundle, "exec jekyll build"
      end
    end
  end

end

after "deploy:symlink:release", "deploy:update_jekyll"
