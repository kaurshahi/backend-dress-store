const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,
  mongoUri:
    "mongodb+srv://kaurshahi1:<password>@cluster0.51jxpch.mongodb.net/?retryWrites=true&w=majority",
};

export default config;
