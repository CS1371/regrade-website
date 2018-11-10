<?php
// Handle GET request by forcing user authentication, by redirecting
// to GT login if necessary, and then redirect back to |returnTo|
if (!empty($_GET['returnTo'])) {
    // Load the CAS lib
    require_once './phpCAS-1.3.5/CAS.php';
    // Enable debugging
    phpCAS::setDebug();
    // Enable verbose error messages. Disable in production!
    phpCAS::setVerbose(true);
    // Initialize phpCAS
    phpCAS::client(CAS_VERSION_2_0, 'login.gatech.edu', 443, '/cas');
    // For production use set the CA certificate that is the issuer of the cert
    // on the CAS server and uncomment the line below
    //phpCAS::setCasServerCACert($cas_server_ca_cert_path);
    // For quick testing you can disable SSL validation of the CAS server.
    // THIS SETTING IS NOT RECOMMENDED FOR PRODUCTION.
    // VALIDATING THE CAS SERVER IS CRUCIAL TO THE SECURITY OF THE CAS PROTOCOL!
    phpCAS::setNoCasServerValidation();
    // force CAS authentication
    phpCAS::forceAuthentication();

    header("Location: " . $_GET["returnTo"]);
    die();
}

// Function to check if user is authenticated and get username if so
function getUsername() {
    // Load the CAS lib
    require_once './phpCAS-1.3.5/CAS.php';
    // Enable debugging
    phpCAS::setDebug();
    // Enable verbose error messages. Disable in production!
    phpCAS::setVerbose(true);
    // Initialize phpCAS
    phpCAS::client(CAS_VERSION_2_0, 'login.gatech.edu', 443, '/cas');
    // Get whether authenticated
    if (phpCAS::isAuthenticated())
        return phpCAS::getUser();
    else
        return [];
}
?>
