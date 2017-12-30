#!/bin/sh

set -e
set -x

# We only build master branch.
SOURCE_BRANCH="master"

# Although .travis.yml sould have a branch.except clause
# make double sure this is not a recursive loop.
if [ "$TRAVIS_PULL_REQUEST" != "false" ] ||
   [ "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy"
    exit 0
fi

# Use travis to specify an environment variable called
# GH_TOKEN that contains a github token with which we can
# push to the repository.
if [ -z "${GH_TOKEN}" ]; then
    echo "No deploy token set"
    exit 1
fi

git config user.name "Travis CI"
git config user.email "travis@travis-ci.org"

git remote add gh-token "https://${GH_TOKEN}@github.com/ehrpg/qstar.git"
git fetch gh-token
git fetch gh-token gh-pages:gh-pages

mkdocs gh-deploy -v --clean -m "Automatic travis build" --remote-name gh-token
