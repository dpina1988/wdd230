function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayMembers(members) {
    const membersContainer = document.getElementById('business-spotlight');
    membersContainer.innerHTML = '';

    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');

        const memberImage = document.createElement('img');
        memberImage.src = `images/${member.image}`;
        memberImage.alt = `${member.name} logo`;

        const memberInfo = document.createElement('div');
        memberInfo.classList.add('member-info');

        const memberName = document.createElement('h3');
        memberName.textContent = member.name;

        const membershipLevel = document.createElement('h4');
        membershipLevel.textContent = member.membershipLevel + ' Member';

        const memberAddress = document.createElement('p');
        memberAddress.textContent = member.address;

        const memberPhone = document.createElement('p');
        memberPhone.textContent = member.phone;

        const memberWebsite = document.createElement('a');
        memberWebsite.href = member.website;
        memberWebsite.textContent = member.website;
        memberWebsite.target = '_blank';

        const memberDescription = document.createElement('p');
        memberDescription.textContent = member.description;

        memberInfo.appendChild(memberName);
        memberInfo.appendChild(membershipLevel);
        memberInfo.appendChild(memberAddress);
        memberInfo.appendChild(memberPhone);
        memberInfo.appendChild(memberWebsite);
        memberInfo.appendChild(memberDescription);

        memberDiv.appendChild(memberImage);
        memberDiv.appendChild(memberInfo);

        membersContainer.appendChild(memberDiv);
    });
}

fetch('data/members.json')
    .then(response => response.json())
    .then(members => {
        const filteredMembers = members.filter(member => member.membershipLevel === 'Caxiense' || member.membershipLevel === 'Saracuruna');
        const randomMembers = getRandomMembers(filteredMembers, 3);
        displayMembers(randomMembers);
    })
    .catch(error => console.error('Error fetching members:', error));
