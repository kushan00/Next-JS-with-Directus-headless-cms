# direct us api filters

## using filter method

### filter by id
 option 1
 -> http://localhost:8055/items/blog?filter[id][_eq]=1
 
 option 2
 -> http://localhost:8055/items/blog/1

### limit the fileds
 -> http://localhost:8055/items/blog?fields=id,title

### filter by title

 -> http://localhost:8055/items/blog?filter[title][_eq]=title 1


### update a blog

 REST API update has a few differences to the creation request. The method needs to be changed to PATCH and the ID needs to be added to 

 -> http://localhost:8055/items/blog/1

    body -> raw -> JSON

    {
        "title":"title1-updated"
    }


### delete a blog

 REST API delete quite simple. The method needs to be changed to DELETE and the ID needs to be in the URL

 -> http://localhost:8055/items/blog/1