
document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('members');
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');

    fetch('data/members.json')
        .then(response => response.json())
        .then(members => {
            displayMembers(members);
        })
        .catch(error => console.error('Error fetching members:', error));

    gridViewBtn.addEventListener('click', () => {
        membersContainer.classList.remove('list-view');
        membersContainer.classList.add('grid-view');
    });

    listViewBtn.addEventListener('click', () => {
        membersContainer.classList.remove('grid-view');
        membersContainer.classList.add('list-view');
    });

    function displayMembers(members) {
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

            const memberLevel = document.createElement('p');
            memberLevel.textContent = member.membershipLevel;

            memberInfo.appendChild(memberName);
            memberInfo.appendChild(memberAddress);
            memberInfo.appendChild(memberPhone);
            memberInfo.appendChild(memberWebsite);
            memberInfo.appendChild(memberDescription);
            memberInfo.appendChild(memberLevel);

            memberDiv.appendChild(memberImage);
            memberDiv.appendChild(memberInfo);

            membersContainer.appendChild(memberDiv);
        });
    }
});
