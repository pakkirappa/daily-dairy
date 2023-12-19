const CONFIG = {
  APP_PORT: process.env.PORT || 5000,
  APP_HOST: process.env.HOST || "http://localhost:5000",
  DB_URL:
    process.env.DB_URL || "mysql://root:root@localhost:3306/digital_dairy",
  SMTP_URL:
    process.env.SMTP_URL ||
    "smtps://no-reply@ymtsindia.com:Takeoff@123@mail.ymtsindia.com:465/?pool=true",
  PRODUCTION: process.env.NODE_ENV === "production",
  // DB_SYNC: true,
  DB_POOL_SIZE: parseInt(process.env.DB_POOL_SIZE || "10"),
  JWT_SECRET: process.env.JWT_SECRET || "daily_dairy",
  JWT_ISSUER: process.env.JWT_ISSUER || "daily_dairy",
};

export default CONFIG;
