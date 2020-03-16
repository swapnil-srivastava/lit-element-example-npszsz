

export function getCustomerInformation(customerid, branchid) {
  const updateCostomerInformation = `
  ${dms_urls.customerInformation}?customerslno=${customerid}&branchslno=${branchid}`;
  return axios.get(updateCostomerInformation);
}