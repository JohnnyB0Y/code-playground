# Chapter 1

## Introduction: Some Representative Problems （介绍：代表性问题）

##### 1.1 A First Problem: Stable Matching （稳定配配）

As an opening topic, we look at an algorithmic problem that nicely(很好) illustrates(说明) many of the themes we will be emphasizing(强调). It is motivated(有动力) by some very natural(自然) and practical(实际的) concerns(关注点), and from these we formulate(制定) a clean and simple statement(陈述) of a problem. The algorithm to solve(解决) the problem is very clean as well, and most of our work will be spent(花费) in proving(证明) that it is correct(正确的) and giving an acceptable(合适) bound on the amount(数量) of time it takes to terminate(使...结束) with an answer. The problem itself -- the Stable Matching Problem -- has several(数个、各自的) origins.

###### The Problem
The Stable Matching Problem Originated, in part, in 1962, when David Gale and Lloyd Shapley, two mathematical(数学的) economists(经济学家), asked the question: Could one design college(大学) admissions(招生) process(流程), or a job(工作) recruiting(招聘) process(流程), that was self-enforcing(自我执行)? What did they mean by this?

To set up the question, let's first think informally(非正式地) about the kind of situation(情况) that might(可能) arise(出现) as a group of friends, all juniors(青少年) in college majoring(主修) in computer science, begin applying(申请) to companies for summer internships(实习). The crux(症结) of the application(申请) process(过程) is the interplay(相互作用) between two different types of parties: companies (the employers) and student (the applicants(申请人)). Each applicant has a preference(偏爱) ordering on companies, and each company -- once the applications come in--forms a preference ordering on its applicants. Based on these preferences, companies extend offers to some of their applicants, applicants choose which of their offers to accept, and people begin heading off to their summer internships.
