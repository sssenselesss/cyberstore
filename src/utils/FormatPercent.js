const FormatPercent = (value) => {
    return Intl.NumberFormat("ru-RU").format(parseInt(value)) + " %";
};

export default FormatPercent;
