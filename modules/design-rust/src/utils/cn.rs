use tw_merge::merge::merge_classes;

/// Joins every non-empty class and resolves Tailwind conflicts, keeping the
/// last declaration — the Rust counterpart of `twMerge(clsx(inputs))`.
pub fn cn<I, C>(classes: I) -> String
where
    I: IntoIterator<Item = C>,
    C: AsRef<str>,
{
    let joined = classes
        .into_iter()
        .map(|class| class.as_ref().trim().to_owned())
        .filter(|class| !class.is_empty())
        .collect::<Vec<String>>()
        .join(" ");

    merge_classes(joined)
}
