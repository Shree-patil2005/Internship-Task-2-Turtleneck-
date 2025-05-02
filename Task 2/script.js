document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach((form, idx) => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const inputs = [...form.querySelectorAll('input')].map(i => i.value.trim());

            if (inputs.some(v => !v)) {
                alert('Please fill in all details carefully.');
                return;
            }

            if (idx === 0) {
                if (!inputs[3].includes('@') || !inputs[3].includes('.')) {
                    alert('Invalid email format. Please enter valid format');
                    return;
                }
                alert('Details has been submitted successfully!');
            } else if (idx === 1) {
                const [name, age] = inputs;
                if (isNaN(age) || age <= 0) {
                    alert('Invalid age input.');
                    return;
                }
                alert(`${name} you are ${age >= 18 ? 'eligible' : 'not eligible'} to vote.`);
            } else if (idx === 2) {
                alert('Your Feedback has been submitted!');
            }
        });
    });
});
