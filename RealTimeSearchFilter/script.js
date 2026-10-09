const users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🖤 | not for everyone"
  },
  {
    name: "kiara mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy ✨ | coffee > everything ☕✨"
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens ☁️ | late night thinker"
  },
  {
    name: "riya malhotra",
    pic: "https://i.pinimg.com/736x/aa/99/c4/aa99c41749351ea085ce9a005bbbf9ad.jpg",
    bio: "lost in my own little universe 🌙✨ | coffee & sunsets"
  },
  {
    name: "ananya kapoor",
    pic: "https://i.pinimg.com/736x/46/98/c2/4698c2206bc859d7680840129ca1f59f.jpg",
    bio: "soft heart, strong mind 🦋 | creating my own story"
  },
  {
    name: "meera sharma",
    pic: "https://i.pinimg.com/1200x/2a/ff/c0/2affc0a46c5d4cb574aada4bbce94a9a.jpg",
    bio: "late night thoughts & loud playlists 🎧🌃 | stay curious"
  },
  {
    name: "kavya singh",
    pic: "https://i.pinimg.com/1200x/31/19/e0/3119e0469b01f0ffd5b0c4165ad8a549.jpg",
    bio: "romanticizing the little things 🌸☕ | one day at a time"
  }
];

function showUsers(arr) {
  let cards = document.querySelector(".cards");

  cards.innerHTML = "";

    arr.forEach(function(user) {

        // Main card
        let card = document.createElement("div");
        card.className = "card";

        // Image
        let img = document.createElement("img");
        img.src = user.pic;
        img.className = "bg-img";

        // Blurred layer
        let blurredLayer = document.createElement("div");
        blurredLayer.className = "blurred-layer";

        // Content
        let content = document.createElement("div");
        content.className = "content";

        // Heading
        let h3 = document.createElement("h3");
        h3.textContent = user.name;

        // Paragraph
        let p = document.createElement("p");
        p.textContent = user.bio;

        // Put h3 and p inside content
        content.appendChild(h3);
        content.appendChild(p);

        // Put everything inside card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // Put card inside body
        document.querySelector(".cards").appendChild(card);
    });
}

showUsers(users);

let inp = document.querySelector(".inp");

inp.addEventListener("input", function () {
    let searchValue = inp.value.toLowerCase().trim();

    let newUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(searchValue);
    });

    showUsers(newUsers);
});