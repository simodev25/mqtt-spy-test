// Publish the time every second.

function publishTime() {
	var Thread = Java.type("java.lang.Thread");
	var Date = Java.type("java.util.Date");
	var SimpleDateFormat = Java.type("java.text.SimpleDateFormat");

	var TIME_FORMAT_WITH_SECONDS = "HH:mm:ss";
	var TIME_WITH_SECONDS_SDF = new SimpleDateFormat(TIME_FORMAT_WITH_SECONDS);

	while (true) {
		var currentTime = TIME_WITH_SECONDS_SDF.format(new Date());

		mqttspy.publish("test/a/a", currentTime, 0, false);
		

		try {
			// Rate in milliseconds.
		//	Thread.sleep(1000);
		}
		catch(err) {
			return false;
		}

		// Keep mqtt-spy informed the script is still running
		mqttspy.touch();
	}

	return true;
}

publishTime();
