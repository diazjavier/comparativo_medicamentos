import { Pool } from "pg";

let conn: any;

if (!conn) {
  conn = new Pool({
    user: "jdiaz",
    password: "123456Aa",
    // host: "192.168.1.133",
    // host: "192.168.0.37",
    // host: "192.168.0.80",
    // host: "192.168.0.107",
      host: "192.168.0.79",
    // host: "10.255.252.17",
    // host: "10.0.8.50",
    // host: "192.168.68.55",
    // host: "10.255.252.68",
    // host: "192.168.235.171",
    // host: "192.168.1.10",
    port: 9091,
    database: "medicamentos",
  });
}

export {conn};