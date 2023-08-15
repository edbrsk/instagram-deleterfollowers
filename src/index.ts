// eslint-disable-next-line no-console
import { IgApiClient, Feed } from 'instagram-private-api';
const ig = new IgApiClient();

const USERNAME = "<USER_GOES_HERE>";
const PASSWORD = "<PASSWORD_GOES_HERE>";

ig.state.generateDevice(USERNAME);

(async () => {    
await ig.account.login(USERNAME, PASSWORD)

const users = []; // usernames you want to unfollow here...

console.log("total users... ", users.length);

for (const user of users) {
  await ig.friendship.destroy(user.pk);
    console.log(`unfollowed: ${user.username}`);
    const time = Math.round(Math.random() * 40000) + 53000; // rate-limit
    await new Promise(resolve => setTimeout(resolve, time));
}
})();
