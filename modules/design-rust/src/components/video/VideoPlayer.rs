use dioxus::prelude::*;

use crate::components::typography::Muted;
use crate::utils::cn;

fn extract_youtube_id(url: &str) -> Option<String> {
    if let Some(rest) = url
        .strip_prefix("https://youtu.be/")
        .or_else(|| url.strip_prefix("http://youtu.be/"))
    {
        let id = rest.split(['?', '&', '/']).next().unwrap_or_default();
        if !id.is_empty() {
            return Some(id.to_string());
        }
    }

    if url.contains("youtube.com") {
        if let Some(pos) = url.find("v=") {
            let rest = &url[pos + 2..];
            let id = rest.split(['&', '#']).next().unwrap_or_default();
            if !id.is_empty() {
                return Some(id.to_string());
            }
        }

        for prefix in ["/embed/", "/shorts/", "/v/"] {
            if let Some(pos) = url.find(prefix) {
                let rest = &url[pos + prefix.len()..];
                let id = rest.split(['?', '/']).next().unwrap_or_default();
                if !id.is_empty() {
                    return Some(id.to_string());
                }
            }
        }
    }

    None
}

fn youtube_embed_url(id: &str) -> String {
    format!("https://www.youtube.com/embed/{id}")
}

fn normalize_bunny_url(src: &str, auto_play: bool) -> String {
    let normalized = src.replace("/play/", "/embed/");
    if !auto_play {
        return normalized;
    }

    let separator = if normalized.contains('?') { '&' } else { '?' };
    format!("{normalized}{separator}autoplay=true&muted=true")
}

#[derive(Props, Clone, PartialEq)]
pub struct VideoPlayerProps {
    #[props(default)]
    pub src: Option<String>,
    #[props(default)]
    pub youtube_id: Option<String>,
    #[props(default)]
    pub title: Option<String>,
    #[props(default = false)]
    pub auto_play: bool,
    #[props(default)]
    pub class: Option<String>,
}

#[component]
pub fn VideoPlayer(props: VideoPlayerProps) -> Element {
    let yt_id = props
        .youtube_id
        .clone()
        .or_else(|| props.src.as_deref().and_then(extract_youtube_id));
    let title = props.title.clone().unwrap_or_else(|| "Video".to_string());

    if let Some(id) = yt_id {
        let base = youtube_embed_url(&id);
        let params = if props.auto_play {
            "rel=0&modestbranding=1&autoplay=1&mute=1"
        } else {
            "rel=0&modestbranding=1"
        };
        let src = format!("{base}?{params}");

        return rsx! {
            iframe {
                src: src,
                title: title,
                allow: "autoplay; encrypted-media; picture-in-picture; fullscreen",
                "allowfullscreen": true,
                class: cn(["w-full h-full border-0", props.class.as_deref().unwrap_or_default()]),
            }
        };
    }

    if let Some(src) = props.src.clone() {
        if src.contains("mediadelivery.net") {
            return rsx! {
                iframe {
                    src: normalize_bunny_url(&src, props.auto_play),
                    title: title,
                    allow: "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture",
                    "allowfullscreen": true,
                    class: cn(["w-full h-full border-0", props.class.as_deref().unwrap_or_default()]),
                }
            };
        }

        return rsx! {
            video {
                src: src,
                title: props.title,
                controls: true,
                autoplay: props.auto_play,
                playsinline: true,
                class: cn(["w-full h-full bg-black", props.class.as_deref().unwrap_or_default()]),
            }
        };
    }

    rsx! {
        div { class: cn(["flex items-center justify-center w-full h-full", props.class.as_deref().unwrap_or_default()]),
            Muted { "No video available" }
        }
    }
}
