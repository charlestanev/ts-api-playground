import { CONFIG } from './constants';
import PostService from './services/PostsService';
import UserService from './services/UsersService';

import './style.css'
import { UserDetails } from './types/user';

const root = document.querySelector<HTMLDivElement>('#app');

const user: UserDetails = {
  id: 11,
  name: "Cahrles Hart",
  username: "MikeH",
  email: "michael.hart@example.com",
  address: {
    street: "Maple Avenue",
    suite: "Suite 305",
    city: "Greenwood",
    zipcode: "56789-1234",
    geo: {
      lat: 40,
      lng: 74.0060
    }
  },
  phone: "1-555-123-4567",
  website: "michaelhart.dev",
  company: {
    name: "Hart Solutions",
    catchPhrase: "Innovative software engineering",
    bs: "deliver cutting-edge web applications"
  }
};

const userId = 10;

const postService = new PostService(`${CONFIG.baseUrl}`);
postService.getAll().then((data) => {
  console.log('Posts : ', data);
});

const userService = new UserService(`${CONFIG.baseUrl}`);
userService.getAll().then((data) => {
  console.log('users : ', data);
});

// userService.create(user).then((data) => {
//   console.log('User Created : ', data);
// });

// userService.getOne(userId).then((data) => {
//   console.log('Get Single User :', data);
// });

// userService.update(userId, user).then((data) => {
//   console.log('User Updated : ', data);
// });

// userService.detele(userId).then((data) => {
//   console.log('User Deleted : ', data);
// });

userService.getSingleUser(userId, (id: number) => {
  postService.getUserPosts(id).then((data) => {
    console.log('User Post : ', data);
  }
  );
});


root!.innerHTML = `
  <div>
    
  </div>
`