pub struct Templates {
    pub ci: &'static str,
    pub production: &'static str,
    pub microservice: &'static str,
}

pub const TEMPLATES: Templates = Templates {
    ci: include_str!("./ci.yml.txt"),
    production: include_str!("./production.yml.txt"),
    microservice: include_str!("./microservice.yml.txt"),
};
