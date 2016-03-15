--
title: Symfony ACL Path Parameters
--
How to include parameters in paths in the access control lists:

- { path: "^/user/[1-9]/change-password", roles: ROLE_USER }

Use regex of course!
