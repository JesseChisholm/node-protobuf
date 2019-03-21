# FORKED
**2019.03.21** from: https://github.com/fuwaneko/node-protobuf

**REASONS**:
* the upstream went `UNMAINTAINED` on October 13, 2018.
* I maintain projects that depend on release `1.4.3` of node-protobuf
  * pulled via `npm` from https://www.npmjs.com/package/node-protobuf
* I may need to do enhancements or bug fixes in the future.
  * I can no longer simply do PRs to the upstream.

---

# 2019.03.21
* Modified `src/parse.cpp` to handle extension fields just like normal fields.
  * They are indistinguishable in the wire format.
  * They should be indistinguishable in the json format.
  * Added to both `ParsePartWithUnknown` and `ParsePart`

---
