const data = {
	"skills": [
		{ 
			"title": "HTML", 
			"percent": "95"
		},
		{
			"title": "CSS", 
			"percent": "75"
		},
		{
			"title": "Tailwind CSS",
			"percent": "95"
		},
		{
			"title": "JavaScript", 
			"percent": "95"
		},
		{
			"title": "Express js",
			"percent": "55"
		},
		{
			"title": "React js", 
			"percent": "45"
		},
		{ 
			"title": "Golang", 
			"percent": "55"
		},
		{ 
			"title": "Fiber Go", 
			"percent": "45"
		}
	],
	"currentSkill": {
		"title": "JavaScript",
		"percent": "95"
	}
};

document.addEventListener('alpine:init', () => { 
	Alpine.data('skillDisplay', () => data);
});