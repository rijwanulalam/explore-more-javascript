function balerFriend(friends){
    let largest = friends[0];
    // let tempFriend = 0;
    for(let i = 0; i < friends.length; i++){
        const friend = friends[i];
        if(friend.length > largest.length){
            largest = friend;
        }
    }
    return largest;
}

const friendsName = ['abul', 'babul', 'arambul', 'mokbul', 'torokbul'];
const result = balerFriend(friendsName);
console.log(result);