const globalConstants = {
  researchRestServiceUrl: "http://localhost:8080",
  casLoginUrl: 'http://REPLACE_NODE_ADDR:40082/cas/login?service=',
  researchCasCallbackUrl: '/callback?client_name=edu_research',
  downloadSCPUrl: 'http://REPLACE_NODE_ADDR:40088/edu_research/download/WinSCP-5.15.2-Setup.exe',
  eduUrl: 'http://REPLACE_NODE_ADDR:40080/edu?from=research',
  vpnUrl: 'http://REPLACE_NODE_ADDR:40088/edu_research/research/homepage/vpn-installer',
  vpnConfUrl: 'http://REPLACE_NODE_ADDR:40088/edu_research/research/homepage/vpn-conf',
};
export default globalConstants;
