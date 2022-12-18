/**
 * The main application, this is the first thing to run when running the appilcation
 *
 * @packageDocumentation
 */
import { ConfigHandler } from "./parseIPtrace";
import { generalBaseSetup} from "./main_helper";
import { ipGeolocator } from "./ipGeolocator";

const apiKey = "f2958b8404369c32c7af5ea78f8dfd05";
const viewer = generalBaseSetup();
new ConfigHandler(viewer);
export const geoLocator = new ipGeolocator(apiKey);

