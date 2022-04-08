# @fubo/smarttv

A staging sandbox for smart tv apps

## How to develop

Run `yarn start` to start the dev server on `http://localhost:3001`.

## Things to know

- This repo does not currently distribute multiple packages, however it does expose several components as federated modules. It is entirely possible to support multiple packages in the future if it makes sense.

- The goal of this repo is to compose shared components for the various SmartTV platforms. Think of this repo as a generic platform that federates routes and pages to root-level platform apps. We can essentially deploy to all platforms from here, without being coupled to any of them.
