
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.iRHCMwIP.js","/cdn/shopifycloud/checkout-web/assets/c1/app.fFiS3Y3c.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.CnnNClxR.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.mYAmvDXN.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-is-shop-pay-active.BbYByhHu.js","/cdn/shopifycloud/checkout-web/assets/c1/types-UnauthenticatedErrorModalPayload.xoiLG9ye.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon.C_9SDN8i.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer.CfpDpN7B.js","/cdn/shopifycloud/checkout-web/assets/c1/phone-phoneCountryCode.CHVrhqNI.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-unactionable-errors.xutTvVJC.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.rKCz_MMB.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound.CTLGG4oZ.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground.DGJWhfl_.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery.DpQ2Nz-2.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors.CQsttGaX.js","/cdn/shopifycloud/checkout-web/assets/c1/types-index.CSxFMtQJ.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon.C_eXYJRt.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.C72jX7Qr.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.C6aN7Pyi.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.DgTYPpDm.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks.2UH3EDLi.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.C5rVKH4R.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer.DoS8qMwf.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUiComponentsColorContrast.CpoPL6AR.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.DHWY9er8.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.8260poCg.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox.poLXM_sl.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.BzY35ZXa.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index.6Pd5EzTi.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine.FEwIHOXH.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.CRn7Zkrd.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.COK2R6c9.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.BFicxlIk.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod.C4NwjDfZ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.K8xEdUak.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletLogo.EtbNJeSC.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.BkpoCr8V.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.B0I76n2L.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowCreateMoreAccountsGdprTreatment.DyHDvePC.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.B_TogEhN.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.BxEx_aTE.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.f5rHarfR.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner.BQJP1fIS.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.DHV2nFyk.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion.BbRj9w87.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input.CvEeV1tv.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-constants.BWMGwjaj.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.ywSvjnFH.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.vlZsSkC2.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.Bo8bUOxJ.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.w5hyq-q2.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.DPVFHy3q.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options.D0NZrZx9.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.COi1VHpi.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.5ENRrubC.js","/cdn/shopifycloud/checkout-web/assets/c1/assets-index.Dd0jO8Ty.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.DQm2XSFQ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/is-shop-pay-active.Bz45BrAn.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/UnauthenticatedErrorModalPayload.CO286Meg.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.B_iZlQze.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/index.DgE9h97U.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.Du-yF2xV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SplitDeliveryMerchandiseContainer.CRDql5Io.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalizationExtensionField.DSgaD89Q.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.CqVkJv9Z.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.CFcgLtAD.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/WalletLogo.DSXJIrkc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ChangeCompanyLocationLink.uqpm88mq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PayPalOverCaptureInfoBanner.CuS5ve3d.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/WalletSandbox.CnR7qNLY.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.Ho_Bkwiw.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/archivo/archivo_n4.dc8d917cc69af0a65ae04d01fd8eeab28a3573c9.woff2?h1=amVyc2V5d2FsYS5pbg&hmac=5696344affb25ab1ecd8be2b7937ebdf48caad7ab1576ae97529e44c88761481","https://fonts.shopifycdn.com/archivo/archivo_n7.651b020b3543640c100112be6f1c1b8e816c7f13.woff2?h1=amVyc2V5d2FsYS5pbg&hmac=d493c39b212499ccd1d504e5c73edbd63077908183dfacb7475f2c437a139e3f","https://fonts.shopifycdn.com/anybody/anybody_n4.ccf4240dd23726e0951f92f80cd72db2afd07b06.woff2?h1=amVyc2V5d2FsYS5pbg&hmac=91c04d2ce3ac7e3086201c9ec61653a7fa31e69d4192c9a2759238d3032f775f","https://fonts.shopifycdn.com/anybody/anybody_n7.52ec5f1edab39b0abe47df49816ae24692eb94bc.woff2?h1=amVyc2V5d2FsYS5pbg&hmac=b3ce4f02acf743ae2cbbff96decc5134fb54d684d9f0d99763963c73aad16ad8"];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  