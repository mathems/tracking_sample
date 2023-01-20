# PseudoDocumentation


* ## Track
    > Subscription to some parsing process. Amount of settings that should control behavior, details of concrete track.
    * ### `status`
        > `active` | `pause` | `block`
    * ### `needle`
        > The search word.
    * ### `options`
        > Some options that define where to make search.

---

# Project details:
* ## `ConfModule`
    > You should create `.dev.env` or `.prod.env` or `.test.env` file with all needed environment variables. The `NODE_ENV` with `dev` | `prod` | `test` will dictate what config should be used. And values for `NODE_ENV` should be defined from command line. For example:
        ```
        NODE_ENV=dev npm run start:dev
        ```
    > (The default environment is `dev`)
    #### Example:
        ```
        NODE_ENV=dev
        MONGO_USER=mongo
        MONGO_PASS=mongo
        MONGO_DB=track_sample
        APP_PORT=3000
        ```


# TODO
- [x] Define types
- [x] ConfModule
- [ ] CRUD for Track
- [ ] Add filtering by status
- [ ] Add sorting by created date
- [ ] Pagination
- [ ] Cover with tests
