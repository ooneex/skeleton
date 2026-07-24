pub struct Templates {
    pub pipelines: &'static str,
    pub microservice_pipelines: &'static str,
}

pub const TEMPLATES: Templates = Templates {
    pipelines: include_str!("./pipelines.yml.txt"),
    microservice_pipelines: include_str!("./microservice-pipelines.yml.txt"),
};
