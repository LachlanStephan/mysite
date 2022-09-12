# This is my personal site

# About

> This site is an outlet for me to express opinions, thoughts and stories. I also use it as a place to show and keep track of my progress as a developer.

# Tech

-   Next.js
-   Typescript
-   Tailwind CSS
-   Deployed to Netlify

# Todo

-   Find more performant way to fetch projects from GitHub

# Roadmap

## Create new page/section - reading

> This will be a reading list of sorts. Potentially reviews

## Build rest api to serve the content

-   Select language (Golang is likely)
-   Select db (Likely MySql)
-   Select hosting - PlanetScale or Linode (Down the track - host myself on raspberry pi)
-   Create admin login for simple crud actions

### Api/db planning

#### Schema

|     | user                  |
| --- | --------------------- |
| PK  | int user_id           |
|     | varchar(255) username |
|     | varchar(255) password |
|     | tinyint isAdmin       |
|     | timestamp created_at  |
|     | timestamp updated_at  |

|     | blogs                |
| --- | -------------------- |
| PK  | int blog_id          |
|     | varchar(255) title   |
|     | varchar(255) author  |
|     | longtext content     |
|     | timestamp created_at |
|     | timestamp updated_at |

|     | tags                     |
| --- | ------------------------ |
| PK  | int tag_id               |
| FK  | int blog_id              |
|     | varchar(255) tag_name    |
|     | varchar(255) hex_code    |
|     | varchar(255) description |
|     | timestamp created_at     |
|     | timestamp updated_at     |

|     | texts                |
| --- | -------------------- |
| PK  | int text_id          |
| FK  | int text_tpe         |
|     | varchar(255) title   |
|     | varchar(255) text    |
|     | timestamp created_at |
|     | timestamp updated_at |

|     | text_type            |
| --- | -------------------- |
| PK  | int text_type_id     |
|     | varchar(255) type    |
|     | timestamp created_at |
|     | timestamp updated_at |

## Build 3rd party access to features

-   Create page where anonymous user can create and submit blog as guest author
-   Create page where anonymous user can create reading suggestion and/or book review (post creating reading section with some content)
