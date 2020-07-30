var postManager = function () {
  //YOUR CODE HERE
  /* You have to order the following posts by userId (Ascending) then add them in a list inside the 'container' */

  const posts = this.posts;
  const sortedObjs = posts.sort(compare);
  sortedObjs.forEach((element) => {
    console.log();
    $("#content").append(
      $("<ul>").html(
        "<li> <h1>" +
          (sortedObjs.findIndex((x) => x.userId === element.userId) + 1) +
          " " +
          element.title +
          "</h1>" +
          element.body +
          "</li></ul>"
      )
    );
  });
};

function compare(a, b) {
  const userIdA = a.userId;
  const userIdB = b.userId;

  let comparison = 0;
  if (userIdA > userIdB) {
    comparison = 1;
  } else if (userIdA < userIdB) {
    comparison = -1;
  }
  return comparison;
}

postManager.prototype.posts = [
  {
    userId: 3,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 3,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 2,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 5,
    id: 5,
    title: "nesciunt quas odio",
    body:
      "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
];

new postManager();
