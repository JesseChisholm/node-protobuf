/*global module:true*/
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({

		release: {
			options: {
				npm: true,
				tagName: "v<%= version %>",
				commitMessage: "Released v<%= version %>",
				tagMessage: "Tagged v<%= version %>",
				github: {
					/* repo: "fuwaneko/node-protobuf", went UNMAINTAINED October 13, 2018 */
					repo: "JesseChisholm/node-protobuf",
          branch: "blizzard-master",
					accessTokenVar: "GH_ACCESS_TOKEN"
				}
			}
		}

	});

	grunt.loadNpmTasks("grunt-release");
};
