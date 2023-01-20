# PseudoDocumentation
> First thoughts


* ## Track
    > Subscription to some parsing process.
* ## TrackConfig
    > Amount of settings that should control behavior, details of concrete track.
    * ### TrackStatus
        > `active` | `pause` | `block`
    * ### TrackQuery
        * #### q
            > The search word, needle. (`q` - stands from query)
        * #### where
            > Amount of settings about where to search.
> May be `Track` should be or include `TrackConfig`

---

# TODO
- [ ] CRUD for TrackConfig
- [ ] Add filtering by status
- [ ] Add sorting by created date
- [ ] Pagination
- [ ] Cover with tests
