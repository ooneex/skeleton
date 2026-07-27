/// Represents a maximum file size constraint as bytes or a human-readable string
/// like `"5MB"`, `"500KB"`, or `"1GB"` — matching `MaxFileSizeType` in the TS source.
#[derive(Clone, PartialEq, Debug)]
pub enum MaxFileSizeType {
    Bytes(u64),
    Text(String),
}

impl Default for MaxFileSizeType {
    fn default() -> Self {
        Self::Text("5MB".into())
    }
}

impl From<u64> for MaxFileSizeType {
    fn from(v: u64) -> Self {
        Self::Bytes(v)
    }
}

impl From<&'static str> for MaxFileSizeType {
    fn from(s: &'static str) -> Self {
        Self::Text(s.into())
    }
}

impl From<String> for MaxFileSizeType {
    fn from(s: String) -> Self {
        Self::Text(s)
    }
}

/// Parses a `MaxFileSizeType` into bytes. Supports `"5MB"`, `"500KB"`, `"1GB"`, `"1TB"`.
pub fn parse_file_size(size: &MaxFileSizeType) -> u64 {
    match size {
        MaxFileSizeType::Bytes(b) => *b,
        MaxFileSizeType::Text(s) => parse_size_str(s.as_str()),
    }
}

fn parse_size_str(s: &str) -> u64 {
    let s = s.trim();
    let idx = s.find(|c: char| c.is_alphabetic()).unwrap_or(s.len());
    let num_part = &s[..idx];
    let unit_part = if idx < s.len() { &s[idx..] } else { "B" };
    let value: f64 = num_part.parse().unwrap_or(0.0);
    let multiplier: u64 = match unit_part.to_uppercase().as_str() {
        "B" => 1,
        "KB" => 1_024,
        "MB" => 1_024 * 1_024,
        "GB" => 1_024 * 1_024 * 1_024,
        "TB" => 1_024 * 1_024 * 1_024 * 1_024,
        _ => 1,
    };
    (value * multiplier as f64) as u64
}

/// Formats a byte count as a human-readable string, e.g. `"5MB"`, `"1.5KB"`.
/// Matches the TS `formatBytes` implementation exactly.
pub fn format_bytes(bytes: u64) -> String {
    if bytes == 0 {
        return "0B".to_string();
    }
    const UNITS: &[&str] = &["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    let k = 1_024_f64;
    let i = (bytes as f64).log(k).floor() as usize;
    let i = i.min(UNITS.len() - 1);
    let value = bytes as f64 / k.powi(i as i32);
    let unit = UNITS[i];
    if value.fract() == 0.0 {
        format!("{}{}", value as u64, unit)
    } else {
        let s = format!("{:.1}", value);
        let s = s.trim_end_matches('0').trim_end_matches('.');
        format!("{}{}", s, unit)
    }
}
