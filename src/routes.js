
const activitiesJSON = require('./activities.json');

const routes = [];

activitiesJSON.map((act) => {
    const entry = {
        path: `/${act.slug}`,
        activity: act
    }

    routes.push(entry);
    return entry;
});

export default routes;