const userId = document.getElementById('userId');
const kakaId = document.getElementById('kakaId');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');

const database = firebase.database();
const rootRef = database.ref('users');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    rootRef.child(userId.value).set({
        kakao_id: kakaId.value,
        age: age.value
    });
});

rootRef.on('child_added', snapshot => {
    console.log('Child(s) added!');
    alert('신청 완료')
});