pub struct Templates {
    pub ci: &'static str,
    pub production: &'static str,
    pub microservice_ci: &'static str,
    pub microservice_production: &'static str,
}

pub const TEMPLATES: Templates = Templates {
    ci: include_str!("./ci.yml.txt"),
    production: include_str!("./production.yml.txt"),
    microservice_ci: include_str!("./microservice-ci.yml.txt"),
    microservice_production: include_str!("./microservice-production.yml.txt"),
};
