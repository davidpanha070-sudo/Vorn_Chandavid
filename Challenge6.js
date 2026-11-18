function vote(arr) {
    if(arr.length === 0){
        return '[]';
    }
    let count = {
        A: 0,
        B: 0,
        C: 0
    };

    // Count votes
    for (let v of arr) {
        count[v]++;
    }

    // Find highest vote count
    let maxVotes = Math.max(count.A, count.B, count.C);

    // Find all winners
    let winners = [];

    for (let candidate in count) {
        if (count[candidate] === maxVotes) {
            winners.push(candidate);
        }
    }

    // Return single winner or tie
    if (winners.length === 1) {
        return winners[0] + ' is the winner';
    }

    return `Tie: ${winners.join(", ")}`;
}

console.log(vote(['A', 'B', 'A', 'C', 'A'])); 
console.log(vote(['A', 'B', 'A', 'B']));      
console.log(vote(['A', 'B', 'C']));           
console.log(vote([]));    