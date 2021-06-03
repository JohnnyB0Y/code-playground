# Chapter 1

## Introduction: Some Representative Problems （介绍：代表性问题）

##### 1.1 A First Problem: Stable Matching （稳定配配）

As an opening topic, we look at an algorithmic problem that nicely(很好) illustrates(说明) many of the themes we will be emphasizing(强调). It is motivated(有动力) by some very natural(自然) and practical(实际的) concerns(关注点), and from these we formulate(制定) a clean and simple statement(陈述) of a problem. The algorithm to solve(解决) the problem is very clean as well, and most of our work will be spent(花费) in proving(证明) that it is correct(正确的) and giving an acceptable(合适) bound on the amount(数量) of time it takes to terminate(使...结束) with an answer. The problem itself -- the Stable Matching Problem -- has several(数个、各自的) origins.

###### The Problem
The Stable Matching Problem Originated, in part, in 1962, when David Gale and Lloyd Shapley, two mathematical economists, asked the question: Could one design college admissions process, or a job recruiting process, that was self-enforcing? What did they mean by this?

To set up the question, let's first think informally about the kind of situation that might arise as a group of friends, all juniors in college majoring in computer science, begin applying to companies for summer internships. The crux of the application process is the interplay between two different types of parties: companies (the employers) and student (the applicants). Each applicant has a preference ordering on companies, and each company -- once the applications come in--forms a preference ordering on its applicants. Based on these preferences, companies extend offers to some of their applicants, applicants choose which of their offers to accept, and people begin heading off to their summer internships.
