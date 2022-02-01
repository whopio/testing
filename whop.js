var WhopApi = require("whop_api");

class Whop {
  constructor(authToken) {
    this.apiClient = WhopApi.ApiClient.instance;
    this.apiClient.authentications["Bearer"]["accessToken"] = authToken;
  }

  // Fetch All Products
  getProducts() {
    var client = new WhopApi.ProductsApi();

    return client.getProducts();
  }

  // Fetch Product
  getProductById(id) {
    var client = new WhopApi.ProductsApi();

    return client.getProductById(id);
  }

  // Create Product
  createProduct(
    title,
    billing_period,
    custom_trial_period,
    expiration_days,
    initial_price,
    stock,
    cancel_action,
    currency,
    license_type,
    price,
    transferable
  ) {
    var client = new WhopApi.ProductsApi();

    var opts = {
      createProductRequest: {
        title: title,
        billing_period: billing_period,
        custom_trial_period: custom_trial_period,
        expiration_days: expiration_days,
        initial_price: initial_price,
        stock: stock,
        cancel_action: cancel_action,
        currency: currency,
        license_type: license_type,
        price: price,
        transferable: transferable,
      },
    };

    return client.createProduct(opts);
  }

  // Product Creation Confirmation
  confirmProduct(
    transferable,
    cancel_action,
    custom_trial_period,
    expiration_days,
    initial_price,
    price,
    title,
    billing_period,
    currency,
    license_type,
    stock
  ) {
    var client = new WhopApi.ProductsApi();

    var opts = {
      confirmProductRequest: {
        transferable: transferable,
        cancel_action: cancel_action,
        custom_trial_period: custom_trial_period,
        expiration_days: expiration_days,
        initial_price: initial_price,
        price: price,
        title: title,
        billing_period: billing_period,
        currency: currency,
        license_type: license_type,
        stock: stock,
      },
    };

    return client.confirmProduct(opts);
  }

  // Send a push notification
  sendPushNotification(body, link, title) {
    var client = new WhopApi.NotificationsApi();

    var opts = {
      sendPushNotificationRequest: {
        body: body,
        link: link,
        title: title,
      },
    };

    return client.sendPushNotification(opts);
  }

  // Fetch Links
  getLinks() {
    var client = new WhopApi.LinksApi();

    return client.getLinks();
  }

  // Create Password Protected Link
  createLink(discord_ids, password, product_id, stock) {
    var client = new WhopApi.LinksApi();

    var opts = {
      createLinkRequest: {
        discord_ids: discord_ids,
        password: password,
        product_id: product_id,
        stock: stock,
      },
    };

    return client.createLink(opts);
  }

  // Validate Key
  validateLicenseByKey(key, metadata) {
    var client = new WhopApi.LicensesApi();

    var opts = {
      validateLicenseByKeyRequest: {
        metadata: metadata,
      },
    };

    return client.validateLicenseByKey(key, opts);
  }

  // Update License
  updateLicenseByKey(key, metadata) {
    var client = new WhopApi.LicensesApi();

    var opts = {
      updateLicenseByKeyRequest: {
        metadata: metadata,
      },
    };

    return client.updateLicenseByKey(key, opts);
  }

  // Reset License
  resetLicenseByKey(key, metadata) {
    var client = new WhopApi.LicensesApi();

    var opts = {
      resetLicenseByKeyRequest: {
        metadata: metadata,
      },
    };

    return client.resetLicenseByKey(key, opts);
  }

  // Fetch All Licenses
  getLicenses() {
    var client = new WhopApi.LicensesApi();

    return client.getLicenses();
  }

  // Fetch License
  getLicenseByKey(key) {
    var client = new WhopApi.LicensesApi();

    return client.getLicenseByKey(key);
  }

  // Ban License
  banLicenseByKey(key, metadata) {
    var client = new WhopApi.LicensesApi();

    var opts = {
      banLicenseByKeyRequest: {
        metadata: metadata,
      },
    };

    return client.banLicenseByKey(key, opts);
  }

  // Fetch Checkout Logs
  getCheckoutLogs() {
    var client = new WhopApi.CheckoutLogsApi();

    return client.getCheckoutLogs();
  }

  // Add Checkout Log
  createCheckoutLog(
    product_name,
    size,
    status,
    website,
    image_url,
    key,
    price
  ) {
    var client = new WhopApi.CheckoutLogsApi();

    var opts = {
      createCheckoutLogRequest: {
        product_name: product_name,
        size: size,
        status: status,
        website: website,
        image_url: image_url,
        key: key,
        price: price,
      },
    };

    return client.createCheckoutLog(opts);
  }
}
export default Whop;
