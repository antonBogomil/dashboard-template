const defaultRules = {
    password: {
        min: 8,
        max: 16
    },

};

export const validate = (fields = [], rules = defaultRules) => {
    const errors = [];
    fields.forEach((field) => {
        if (rules[field.name].isRequired && field.value.length===0){
            errors.push('Field is required');
        }
    });
    return errors.length ? errors : true;
};