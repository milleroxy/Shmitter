

export const handleUpdate = (message, updateFunction) => {
    const input = prompt(message);
    if (input !== null && input !== '') {
        updateFunction(input);
    }
};


export const updateItem = (updateFunction, field, value) => {
    updateFunction(prev => ({
        ...prev,
        [field]: value
    }));
};