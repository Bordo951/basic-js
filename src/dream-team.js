module.exports = function createDreamTeam(members) {
    let membersFirstLetterArray = [],
        membersArrayName,
        membersArrayNameWhite,
        dreamTeamStringSort;

    if (!Array.isArray(members)) {
        return false;
    }

    for (let i = 0; i < members.length; i++) {

        if (typeof members[i] === "string") {
            membersArrayName = members[i];
            membersArrayNameWhite = membersArrayName.replace(/ +/g, '');
            membersFirstLetterArray.push(membersArrayNameWhite[0].toUpperCase());
        }
    }
    dreamTeamStringSort = membersFirstLetterArray.sort();

    return dreamTeamStringSort.join('');
};
