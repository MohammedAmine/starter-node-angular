angular.module('NerdService', []).factory('Nerd', ['$http', function ($http) {

    var jenkins = {};
    var baseUrl = 'http://ci.digital-ready.groupe-seb.com';
    var baseUrlParam = '/api/json';

    var jenkinsUrlBuilder = {

        buildJenkinsMasterNodeUrl: function () {
            console.log('url', baseUrl + baseUrlParam);
            return baseUrl + baseUrlParam;
        },

        buildgetJenkinsJobsUrl: function (jobName) {
            console.log('url', baseUrl + '/job/' + jobName + baseUrlParam);
            return baseUrl + '/job/' + jobName + baseUrlParam;
        },

        buildgetJenkinsBuildsUrl: function (jobName, buildNumber) {
            console.log('url', baseUrl + '/job/' + jobName + '/' + buildNumber + baseUrlParam);
            return baseUrl + '/job/' + jobName + '/' + buildNumber + baseUrlParam;
        }
    };


    return {

        getJenkinsMasterNode: function () {
            return $http.get(jenkinsUrlBuilder.buildJenkinsMasterNodeUrl()).then(function (response) {
                return response.data;
            }).catch(function (error) {
                throw error;
            });
        },

        getJenkinsJobs: function (jobName) {
            return $http.get(jenkinsUrlBuilder.buildgetJenkinsJobsUrl(jobName)).then(function (response) {
                return response.data;
            }).catch(function (error) {
                throw error;
            });
        },

        getJenkinsBuilds: function (jobName, buildNumber) {
            return $http.get(jenkinsUrlBuilder.buildgetJenkinsBuildsUrl(jobName, buildNumber)).then(function (response) {
                return response.data;
            }).catch(function (error) {
                throw error;
            });
        }
    }
}]);