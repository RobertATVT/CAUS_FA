<?php
define('WP_AUTO_UPDATE_CORE', false);// This setting was defined by WordPress Toolkit to prevent WordPress auto-updates. Do not change it to avoid conflicts with the WordPress Toolkit auto-updates feature.
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'caus_inside');

/** MySQL database username */
define('DB_USER', 'caus_inside');

/** MySQL database password */
define('DB_PASSWORD', '#Caususer15#');

/** MySQL hostname */
define('DB_HOST', 'localhost:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Ag&JYtI(n0Yg8D13fFXntp8oqAGV14DerBt!yB(FSTs48)nIi)(anyZCUgs%2X^3');
define('SECURE_AUTH_KEY',  '2nj#*INOeodLn8V&T6ymZyoDbjyinXEmw#quYp(^5yO3vj^kcH@##fQ&K*fM0YxI');
define('LOGGED_IN_KEY',    '4U*2N*T42%Ms4B@S!zbhJm7mIR%)1SWcDm9QE#z)HQS9H1QwS7maP8Z&WiZkEMHx');
define('NONCE_KEY',        '5EBEu)#%(ciq1uhiHqvYEDzG8t#RVNfYlz6AaecTGLk#MlJJZUw@%QBzwR^kta2V');
define('AUTH_SALT',        'M3&X*mo5u(Ek%I1QFLlAidOYz2wTfb&X9MErmfJLbP448PoObDHAWf2)@7^DSK08');
define('SECURE_AUTH_SALT', 'DkQY1N6sr84AICX7H8vv4kT3#tOUHP5QiKVG#5h@vbMfXYARY3wbsaQQYko@Hh6K');
define('LOGGED_IN_SALT',   '@)yuF2XfO^^pIvNrFpf7TrR28M31cUuCRqY)jSplLu0lq2agWrz0*fy80cZlY%KS');
define('NONCE_SALT',       'J!O@0fObsf(IYFrx3qE%6k3atvldw%3^Rnkr7uyDFtX(kIWB!%4i%w9Dr6K0MEWi');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'mkklNIe8_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define( 'WP_ALLOW_MULTISITE', true );

define ('FS_METHOD', 'direct');
